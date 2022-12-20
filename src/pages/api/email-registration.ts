import path from 'path';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { EventModel } from 'src/models/Event';

interface Data{
    Message : string;
    Status: number;
}

interface RequestBody{
    Email : string;
    EventId: string;
}

function buildPath() {
  return path.join(process.cwd(), 'data', 'eventsdata.json');
}

function extractData(filePath : string) {
  const jsonData : Buffer = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
}

export default function handler(req: NextApiRequest,
                                res: NextApiResponse<Data>) {
  const { method } = req;
  const filePath = buildPath();
  const { Catagories, Events } = extractData(filePath);

  if (!Events) {
    return res.status(404).json({
      Status: 404,
      Message: 'Events data not found',
    });
  }

  if (method === 'POST') {
    const { Email, EventId }: RequestBody = req.body;

    if (!Email || !Email.includes('@')) {
      res.status(422).json({ 
                            Message: 'Invalid email address',
                            Status: 422 });
    }

    const newAllEvents = Events.map((ev: EventModel) => {
      if (ev.Id === EventId) {
        if (ev.emails_registered.includes(Email)) {
          res.status(409).json({ Message: 'This email has already been registered',
                                 Status: 409 });
          return ev;
        }
        return {
          ...ev,
          emails_registered: [...ev.emails_registered, Email],
        };
      }
      return ev;
    });

    fs.writeFileSync(filePath, JSON.stringify({ Catagories, Events: newAllEvents }));

    res.status(201).json({
      Message:  `You have been registered successfully with the email: ${Email} for the event: ${EventId}`,
      Status: 201
    });
  }
}