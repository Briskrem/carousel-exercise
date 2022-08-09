import {render} from '@testing-library/react'
import Card from './Card'

test('up in smoke test', ()=>{
    render(<Card />)
})

test('test snapshot', ()=>{
    const {asFragment} = render(<Card />)
    expect(asFragment()).toMatchSnapshot()
})