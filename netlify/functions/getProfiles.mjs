export default async (req, context) => {
  return new Response(JSON.stringify(['Hello', 'World']), {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
    },
  });
};
