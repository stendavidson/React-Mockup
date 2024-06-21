import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from "../Main/ContactUs/ContactForm/ContactForm";

// This closes all network requests and pending worker threads.
afterEach(() => {
    jest.clearAllTimers();
});


// Component render test
test("Contact form renders", () => {

    render(<ContactForm/>);
    
    // These fields are always present on the contact form.
    const elements = [];
    elements.push(screen.getByText("Full Name"));
    elements.push(screen.getByText("Email"));
    elements.push(screen.getByText("Message"));
    elements.forEach((element) => {expect(element).toBeInTheDocument()});
});


// Component User Input - UI Change
test("EOI form - invalid (Full Name)", async () => {

    render(<ContactForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Full Name");

    fireEvent.input(inputElement, {target : {value : "123"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "red"})});   
});


// Component User Input - UI Change
test("EOI form - valid (Full Name)", async () => {

    render(<ContactForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Full Name");

    fireEvent.input(inputElement, {target : {value : "Sten Healey"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "black"})});
});


// Component User Input - UI Change
test("EOI form - invalid (Email): no @", async () => {

    render(<ContactForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Email Address: example@gmail.com");

    fireEvent.input(inputElement, {target : {value : "seangmail.com"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "red"})});    
});


// Component User Input - UI Change
test("EOI form - invalid (Email): illegal characters !", async () => {

    render(<ContactForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Email Address: example@gmail.com");

    fireEvent.input(inputElement, {target : {value : "se!an.@gmail.com"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "red"})});      
});


// Component User Input - UI Change
test("EOI form - invalid (Email): double @", async () => {

    render(<ContactForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Email Address: example@gmail.com");

    fireEvent.input(inputElement, {target : {value : "sean@@gmail.com"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "red"})});     
});


// Component User Input - UI Change
test("EOI form - valid (Email)", async () => {

    render(<ContactForm/>);
    
    // input field selector
    const inputElement = screen.getByPlaceholderText("Email Address: example@gmail.com");

    fireEvent.input(inputElement, {target : {value : "sean@gmail.com"}});

    await waitFor(() => {expect(inputElement).toHaveStyle({"border-color" : "black"})});      
});
