import { render, screen, fireEvent } from "@testing-library/react";  //con fireEvent puedo usar eventos
import HomePage from "../pages/HomePage.js";

describe ('HomePage component', () =>{

    let button;
    beforeEach(()=>{ 
        render(<HomePage/>);   //antes de cada prueba, renderizo el componente: -------ARRANGE-------
        button = screen.getByRole('button', {name: 'RemindMe'}); //y accedo al objeto a testear
    })

    test('el botón de login se encuentre en el documento', () =>{
        expect(button).toBeInTheDocument();  //---------ASSERT------------
    });

    test('que no esté desabilitado para su uso', ()=>{
    expect(screen.getByRole('button')).not.toBeDisabled()

    });

    test.only('si al pulsar el botón cambia el color de fondo a azul', ()=>{
        fireEvent.click(button);      //--------------ACT----------------
        expect(button).toHaveStyle({
            background: 'blue'
        });
    });
});





















//arrange(recrear contorno para testear), act(llamado de la función), assert((expect)lo que llamamos es lo que esperamos)
//console.assert

            //console.assert()
