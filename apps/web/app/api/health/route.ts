export async function GET() {
  return Response.json({ service: 'bruno-atlas', status: 'ok', version: '0.1.0' });
}
