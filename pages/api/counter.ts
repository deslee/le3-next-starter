import { NowRequest, NowResponse } from '@now/node'
let count = 0;

async function handler(req: NowRequest, res: NowResponse) {
    if (count > 12) {
        res.status(400).send('')
        return;
    }
    res.status(200).json({
        count: ++count
    })
}

export default handler;