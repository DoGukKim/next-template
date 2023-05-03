import CheckboxRoot from 'components/CheckBox'
import Typography from 'components/Typography'

export default function Home() {
  return (
    <main>
      <CheckboxRoot>
        {(data) => <Typography as="h1">{data.name}</Typography>}
      </CheckboxRoot>
    </main>
  )
}
