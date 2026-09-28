import express from 'express';
import { HindsightClient } from '@vectorize-io/hindsight-client';

const app = express();
app.use(express.json());
app.use(express.static('.'));

// 🚀 SKIP DOCKER: Connect directly to the cloud engine instead!
const hindsight = new HindsightClient({
  baseUrl: 'https://api.hindsight.vectorize.io', // Cloud URL
  apiKey: 'hsk_a28d835122b874803cf287d174fec623_290696396459e24a'            // Put your actual token here
});

const BANK_ID = 'swiggy_city_brain';;

// 2. ENDPOINT TO PUT DATA IN: Save a restaurant update (RETAIN)
app.post('/api/retain', async (req, res) => {
  const { restaurantId, incidentText, category } = req.body;

  try {
    await hindsight.retain(BANK_ID, incidentText, {
      tags: [`restaurant:${restaurantId}`, `category:${category}`, "visibility:shared"],
      metadata: { timestamp: new Date().toISOString() }
    });

    res.status(200).json({ 
      status: "Success", 
      message: `Saved incident log for restaurant: ${restaurantId}` 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. ENDPOINT TO READ DATA OUT: Query a restaurant's memory (RECALL)
app.get('/api/recall', async (req, res) => {
  const { restaurantId, question } = req.query;

  try {
    const memoryResult = await hindsight.recall(BANK_ID, question, {
      tags: [`restaurant:${restaurantId}`]
    });

    res.status(200).json({
      query: question,
      matchedMemories: memoryResult.results.map(item => item.text)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Start your Swiggy Operations application
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Swiggy Ops Brain server running at http://localhost:${PORT}`);
});
