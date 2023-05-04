import { execaCommand } from "execa"

execaCommand('vite --config ./vite.config.ts', { stdio: 'inherit' })
