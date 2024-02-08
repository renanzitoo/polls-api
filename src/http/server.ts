import fastify from 'fastify'
import websocket from '@Fastify/websocket'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import cookie from '@fastify/cookie'
import { pollResults } from './ws/poll-results'

const app = fastify()

app.register(cookie, {
  secret: "polls-app-nlw", 
  hook: 'onRequest', 
  parseOptions: {}  
})

app.register(websocket)

app.register(pollResults)
app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP server running')
})