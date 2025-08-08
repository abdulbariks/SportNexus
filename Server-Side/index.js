const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const admin = require("firebase-admin");

app.use(cors());
app.use(express.json());

const serviceAccount = require("./firebase-adminsdk.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// const uri = `mongodb://127.0.0.1:27017`;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9uorkol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const eventsCollection = client.db("eventsDB").collection("events");
    const bookingEventsCollection = client
      .db("eventsDB")
      .collection("bookings");

    // custom middlewares
    const verifyFBToken = async (req, res, next) => {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).send({ message: "unauthorized access" });
      }
      const token = authHeader.split(" ")[1];
      if (!token) {
        return res.status(401).send({ message: "unauthorized access" });
      }

      // verify the token
      try {
        const decoded = await admin.auth().verifyIdToken(token);
        req.decoded = decoded;
        next();
      } catch (error) {
        return res.status(403).send({ message: "forbidden access" });
      }
    };

    // get All Events
    app.get("/events", async (req, res) => {
      const result = await eventsCollection.find().toArray();
      res.send(result);
    });

    // get Single Events
    app.get("/events/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await eventsCollection.findOne(query);
      res.send(result);
    });

    // Create Event
    app.post("/create-event", async (req, res) => {
      const newFormData = req.body;
      console.log(newFormData);
      const result = await eventsCollection.insertOne(newFormData);
      res.send(result);
    });

    // Update Event
    app.put("/events/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedEvent = req.body;
      const updatedDoc = {
        $set: updatedEvent,
      };
      const result = await eventsCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    // Delete Event
    app.delete("/events/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await eventsCollection.deleteOne(query);
      res.send(result);
    });

    // get All Bookings Events
    app.get("/bookings", async (req, res) => {
      const result = await bookingEventsCollection.find().toArray();
      res.send(result);
    });

    // Create Bookings Event
    app.post("/bookings", async (req, res) => {
      const { email, bookingId } = req.body;
      try {
        const existing = await bookingEventsCollection.findOne({
          email,
          bookingId,
        });

        if (existing) {
          return res.status(409).json({ message: "Already booked" });
        }

        const newFormData = req.body;
        const result = await bookingEventsCollection.insertOne(newFormData);
        res.send(result);
      } catch (error) {
        console.error("Booking error:", error);
        return res.status(500).json({ message: "Internal server error" });
      }
    });

    // Delete Bookings Event
    app.delete("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookingEventsCollection.deleteOne(query);
      res.send(result);
    });

    // get featured events
    app.get("/featured", async (req, res) => {
      try {
        const now = new Date();
        // const todayString = now.toISOString().split("T")[0];
        const events = await eventsCollection
          .find({
            // date: { $gt: todayString },
          })
          // .sort({ date: 1 })
          .limit(6)
          .toArray();

        res.json(events);
      } catch (error) {
        console.error("Error fetching featured events:", error);
        res.status(500).json({ message: "Server error while fetching events" });
      }
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("hello, i am ready for you");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
