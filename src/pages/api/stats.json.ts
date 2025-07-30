import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  try {
    const allRaids = await getCollection('raids');
    
    const stats = {
      totalRaids: allRaids.length,
      dateRange: allRaids.length > 0 ? {
        earliest: allRaids.reduce((earliest, raid) => 
          new Date(raid.data.date) < new Date(earliest.data.date) ? raid : earliest
        , allRaids[0]).data.date,
        latest: allRaids.reduce((latest, raid) => 
          new Date(raid.data.date) > new Date(latest.data.date) ? raid : latest
        , allRaids[0]).data.date
      } : {
        earliest: null,
        latest: null
      },
      totalPlayers: new Set(
        allRaids.flatMap(raid => 
          raid.data.players.map(player => player.allycode)
        )
      ).size,
      lastUpdated: new Date().toISOString()
    };

    return new Response(JSON.stringify(stats), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Failed to fetch stats:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch stats' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
