import { observer } from 'mobx-react-lite'

const Home = observer(() => {
  return (
    <>
      <div className="flex h-dvh flex-col items-center justify-center space-y-4">
        <img
          alt="GOLIA Logo"
          src="https://cdn.golia.jp/logo-icon.png"
          className="size-24"
        />
        <div className="text-2xl">GOLIA React Template</div>
      </div>
    </>
  )
})

export default Home
