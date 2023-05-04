import Checkbox from 'components/CheckBox'
import Input from 'components/Input'
import Label from 'components/Label'
import { Flex } from 'components/Layout'
import Typography from 'components/Typography'
import { useRef } from 'react'

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null)
  const flexRef = useRef<HTMLDivElement>(null)

  return (
    <main>
      <Checkbox>
        <Checkbox.Indicator>
          {() => <Typography>indicator</Typography>}
        </Checkbox.Indicator>
      </Checkbox>
      <Flex ref={flexRef} align="center">
        <Input ref={inputRef} id="ho"></Input>
        <Label htmlFor="ho">isWork?</Label>
      </Flex>
    </main>
  )
}
