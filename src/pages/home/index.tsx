import {Card} from '@material-tailwind/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
export default function Home() {
    return <div>
        <ConnectButton />
        <Card>
            The Home Page is here
        </Card>
    </div>
}