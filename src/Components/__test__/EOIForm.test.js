import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import EOIForm from '../Main/Enrolment/EOIForm/EOIForm';

// This closes all network requests and pending worker threads.
afterEach(() => {
    jest.clearAllTimers();
});


// Component render test
test("Exression of Interest form renders", () => {

    render(<EOIForm/>);
    
    // These components are always present in the EOI Form
    const elements = [];
    elements.push(screen.getByText("First Name"));
    elements.push(screen.getByText("Last Name"));
    elements.push(screen.getByText("The child has a pre-existing health condition"));
    elements.push(screen.getByText("Guardian's First Name"));
    elements.push(screen.getByText("Guardian's Last Name"));
    elements.push(screen.getByText("Phone Number"));
    elements.push(screen.getByText("Email"));
    elements.forEach((element) => {expect(element).toBeInTheDocument()});
});


// Component User Input - UI Change
test("EOI form - invalid (Child's First Name)", async () => {

    render(<EOIForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Child's First Name");

    fireEvent.input(inputElement, {target : {value : "123"}});
    
    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "red"})});   
});


// Component User Input - UI Change
test("EOI form - valid (Child's First Name)", async () => {

    render(<EOIForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Child's First Name");

    fireEvent.input(inputElement, {target : {value : "Sten"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "black"})});
});


// Component User Input - UI Change
test("EOI form - invalid (Child's Last Name)", async () => {

    render(<EOIForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Child's Last Name");

    fireEvent.input(inputElement, {target : {value : " "}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "red"})});     
});


// Component User Input - UI Change
test("EOI form - valid (Child's Last Name)", async () => {

    render(<EOIForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Child's Last Name");

    fireEvent.input(inputElement, {target : {value : "Healey"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "black"})}); 
});


// Component User Input - UI Change
test("EOI form - invalid (Guardian's First Name)", async () => {

    render(<EOIForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Guardian's First Name");

    fireEvent.input(inputElement, {target : {value : "Alina Healey"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "red"})});    
});


// Component User Input - UI Change
test("EOI form - valid (Guardian's First Name)", async () => {

    render(<EOIForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Guardian's First Name");

    fireEvent.input(inputElement, {target : {value : "Healey"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "black"})});
});


// Component User Input - UI Change
test("EOI form - invalid (Guardian's Last Name)", async () => {

    render(<EOIForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Guardian's Last Name");

    fireEvent.input(inputElement, {target : {value : "%"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "red"})});    
});


// Component User Input - UI Change
test("EOI form - valid (Guardian's Last Name)", async () => {

    render(<EOIForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Guardian's Last Name");

    fireEvent.input(inputElement, {target : {value : "Healey"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "black"})});
});


// Component User Input - UI Change
test("EOI form - invalid (Phone Number): too long", async () => {

    render(<EOIForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Phone Number: 02XX XXX XXX");

    fireEvent.input(inputElement, {target : {value : "04620335289"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "red"})});     
});


// Component User Input - UI Change
test("EOI form - invalid (Phone Number): invalid state code 09", async () => {

    render(<EOIForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Phone Number: 02XX XXX XXX");

    fireEvent.input(inputElement, {target : {value : "0969022530"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "red"})}); 
});


// Component User Input - UI Change
test("EOI form - valid (Phone Number)", async () => {

    render(<EOIForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Phone Number: 02XX XXX XXX");

    fireEvent.input(inputElement, {target : {value : "0269022532"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "black"})});   
});


// Component User Input - UI Change
test("EOI form - invalid (Email): no @", async () => {

    render(<EOIForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Email Address: example@gmail.com");

    fireEvent.input(inputElement, {target : {value : "seangmail.com"}});
    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "red"})});    
});


// Component User Input - UI Change
test("EOI form - invalid (Email): illegal characters !", async () => {

    render(<EOIForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Email Address: example@gmail.com");

    fireEvent.input(inputElement, {target : {value : "se!an.@gmail.com"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "red"})});      
});


// Component User Input - UI Change
test("EOI form - invalid (Email): double @", async () => {

    render(<EOIForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Email Address: example@gmail.com");

    fireEvent.input(inputElement, {target : {value : "sean@@gmail.com"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "red"})});     
});


// Component User Input - UI Change
test("EOI form - valid (Email)", async () => {

    render(<EOIForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Email Address: example@gmail.com");

    fireEvent.input(inputElement, {target : {value : "sean@gmail.com"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "black"})});      
});