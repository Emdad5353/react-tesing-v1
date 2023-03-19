import {render, screen} from '@testing-library/react'
import {Greet} from './greet';

describe('Grret', ()=>{
    it(
        'Greet renders correctly', ()=>{
            render(<Greet />)
            const textElement= screen.getByText('Hello');
            expect(textElement).toBeInTheDocument()
        }
    ) 

    fit(
        'Greet renders correctly', ()=>{
            render(<Greet />)
            const textElement= screen.getByText('Hello');
            expect(textElement).toBeInTheDocument()
        }
    ) 
    
    xit('Greet renders with a name', ()=>{
        render(<Greet name='Emdad'/>)
        const textElement= screen.getByText('Hello Emdad')
        expect(textElement).toBeInTheDocument()
    })
})