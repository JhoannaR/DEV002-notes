import { render, screen, fireEvent } from "@testing-library/react";  //con fireEvent puedo usar eventos
import HomePage from "../pages/HomePage.js";

describe ('HomePage component', () =>{

    let button;
    beforeEach(()=>{ 
        render (<HomePage/>);   //antes de cada prueba, renderizo el componente
        button = screen.getByRole('button', {name: 'RemindMe'}); //y accedo al objeto a testear

    })

    test('el botón de login se encuentre en el documento', () =>{
        expect(button).toBeInTheDocument();
    });

    test('si al pulsar el botón cambia el color de fondo a azul', ()=>{
        fireEvent.click(button);
        expect(button).toHaveStyle({
            backgroundColor: 'blue'
        });
    });
});