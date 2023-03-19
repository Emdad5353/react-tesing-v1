import {render, screen} from '@testing-library/react'
import {Greet} from './greet';

describe('Grret', ()=>{
    test.skip(
        'Greet renders correctly', ()=>{
            render(<Greet />)
            const textElement= screen.getByText('Hello');
            expect(textElement).toBeInTheDocument()
        }
    ) 

    describe('Grret', ()=>{
        test.skip(
            'Greet renders correctly', ()=>{
                render(<Greet />)
                const textElement= screen.getByText('Hello');
                expect(textElement).toBeInTheDocument()
            }
        ) 
    })
    
    test.only('Greet renders with a name', ()=>{
        render(<Greet name='Emdad'/>)
        const textElement= screen.getByText('Hello Emdad')
        expect(textElement).toBeInTheDocument()
    })
})