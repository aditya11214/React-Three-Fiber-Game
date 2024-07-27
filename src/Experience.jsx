import { OrbitControls } from '@react-three/drei'
import { Physics, Debug } from '@react-three/rapier'
import Lights from './Lights.jsx'
import { Level} from './Level.js'
import Player from './Player.js'
import useGame from './stores/useGame.js'
// import Effects from './Effects.js'

export default function Experience()
{
    const blocksCount = useGame((state) => { return state.blocksCount })
    const blocksSeed = useGame((state) => { return state.blocksSeed })

    return <>

        <color args={ [ '#bdedfc' ] } attach={ 'background' } />

        <OrbitControls makeDefault />

        <Physics>
        {/* <Debug /> */}
        <Lights />
        <Level count={ blocksCount } seed={ blocksSeed } />
        <Player />
        </Physics>

        {/* <Effects /> */}

    </>
}