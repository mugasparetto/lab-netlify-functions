import { createClient } from '@supabase/supabase-js';

export default async (req, context) => {
  console.log(process.env.SUPABASE_API);
  // const supabase = createClient(
  //   'https://ulelpxqzwblrqicwqhwz.supabase.co',
  //   process.env.SUPABASE_API
  // );

  return new Response(JSON.stringify(['Hello', 'World']), {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
    },
  });
};
