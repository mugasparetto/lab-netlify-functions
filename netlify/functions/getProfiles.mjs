import { createClient } from '@supabase/supabase-js';

export default async (req, context) => {
  const supabase = createClient(
    'https://ulelpxqzwblrqicwqhwz.supabase.co',
    process.env.SUPABASE_API
  );

  const headers = {
    'Access-Control-Allow-Origin': '*', //TODO: UPDATE THIS
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
  };

  try {
    const { data, error } = await supabase.from('profile').select(`
    id,
    name,
    skills:profile_skills (
      details,
      skill:skills (id, name)
    )
  `);

    if (error) throw error;

    return new Response(JSON.stringify(data), {
      statusCode: 200,
      headers,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      statusCode: 500,
      headers,
    });
  }
};
