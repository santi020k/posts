import Button from '@/atoms/button/button'

import GroupButtons from '@/molecules/group-buttons/group-buttons'

import Badge from '@/components/atoms/badge/badge'

const Home = () => (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="z-10 flex w-full max-w-5xl flex-col items-center justify-between font-mono text-sm">
      <h1 className="flex w-full justify-center border-b pb-6 pt-8">
          Components:
        <code className="font-mono font-bold">src/components/*</code>
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex w-full items-end justify-start">
          <Button>Button</Button>
        </div>
        <div className="flex w-full items-end justify-start">
          <Badge>Badge</Badge>
        </div>
        <div className="flex w-full items-end justify-start">
          <GroupButtons />
        </div>
      </div>
    </div>
  </main>
)

export default Home
