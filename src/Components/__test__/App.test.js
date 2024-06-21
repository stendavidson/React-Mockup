import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../../App';


// This sets up timers - these are used for async functions and network requests
beforeEach(() => {
    jest.useRealTimers();
});


// This cleans up timers - these are used for async functions and network requests
afterEach(() => {
    jest.clearAllTimers();
});


// Integration test - core UI renders
test("Application renders", async () => {
    
    render(<App/>);
    
    // These components are always present in the application.
    const elements = screen.getAllByText(/News/);
    elements.concat(screen.getAllByText(/Fixture/));
    elements.concat(screen.getAllByText(/Ladder/));
    elements.concat(screen.getAllByText(/Highlights/));
    elements.concat(screen.getAllByText(/Youth Leagues/));
    elements.concat(screen.getAllByText(/Contact Us/));
    elements.concat(screen.getAllByText(/Privacy Statement/));
    elements.concat(screen.getAllByText(/Terms & Conditions/));
    elements.push(screen.getByText(/More/));
    elements.push(screen.getByText(/Canberra FC/));
    elements.push(screen.getByText(/Main Pages/));
    elements.push(screen.getByText(/Other Pages/));
    elements.push(screen.getByText(/4 Teesdale Place/));
    elements.push(screen.getByText(/Stirling/));
    elements.push(screen.getByText(/ACT/));
    elements.forEach((element) => {expect(element).toBeInTheDocument()});
});

// Integration test - navigation UI Change
test("Application navigation UI change - News", async () => {
    
    render(<App/>);
    
    // Events are fired to test application's response to user input.
    const buttons = screen.getAllByText(/News/);
    fireEvent.click(buttons[0]);
    
    // After the event is fired page content is expected
    await waitFor(() => {
        const elements = [];
        elements.push(screen.getByText("Lorem ipsum dolor sit amet"));
        elements.push(screen.getByText("Lorem ipsum carpe dium"));
        elements.forEach((element) => {expect(element).toBeInTheDocument()});
    });
});


// Integration test - navigation UI Change
test("Application navigation UI change - Fixture", async () => {
    
    render(<App/>);
    
    // Events are fired to test application's response to user input.
    const buttons = screen.getAllByText(/Fixture/);
    fireEvent.click(buttons[0]);
    
    // After the event is fired page content is expected
    await waitFor(() => {
        const elements = [];
        elements.push(screen.getByText("Date"));
        elements.push(screen.getByText("Home"));
        elements.push(screen.getByText("vs"));
        elements.push(screen.getByText("Visitor"));
        elements.forEach((element) => {expect(element).toBeInTheDocument()});
    });
});


// Integration test - navigation UI Change
test("Application navigation UI change - Ladder", async () => {
    
    render(<App/>);
    
    // Events are fired to test application's response to user input.
    const buttons = screen.getAllByText(/Ladder/);
    fireEvent.click(buttons[0]);
    
    // After the event is fired page content is expected
    await waitFor(() => {
        const elements = [];
        elements.push(screen.getByText("Team"));
        elements.push(screen.getByText("No."));
        elements.push(screen.getByText("Wins"));
        elements.push(screen.getByText("Draws"));
        elements.push(screen.getByText("Losses"));
        elements.push(screen.getByText("Diff"));
        elements.push(screen.getByText("Points"));
        elements.forEach((element) => {expect(element).toBeInTheDocument()});
    });
});


// Integration test - navigation UI Change
test("Application navigation UI change - Highlights", async () => {
    
    render(<App/>);
    
    // Events are fired to test application's response to user input.
    const buttons = screen.getAllByText(/Highlights/);
    fireEvent.click(buttons[0]);
    
    // After the event is fired page content is expected
    await waitFor(() => {
        const element = screen.getByTestId("highlights-video");        
        expect(element).toBeInTheDocument();
    });
});


// Integration test - navigation UI Change
test("Application navigation UI change - Youth Leagues", async () => {
    
    render(<App/>);
    
    // Events are fired to test application's response to user input.
    const buttons = screen.getAllByText(/Youth Leagues/);
    fireEvent.click(buttons[0]);
    
    // After the event is fired page content is expected
    await waitFor(() => {
        const element = screen.getByText("Expression of Interest Form");        
        expect(element).toBeInTheDocument();
    });
});


// Integration test - navigation UI Change
test("Application navigation UI change - Contact Us", async () => {
    
    render(<App/>);
    
    // Events are fired to test application's response to user input.
    const buttons = screen.getAllByText(/Contact Us/);
    fireEvent.click(buttons[0]);
    
    // After the event is fired page content is expected
    await waitFor(() => {
        const element = screen.getByText("Send Us A Message");        
        expect(element).toBeInTheDocument();
    });
});


// Integration test - navigation UI Change
test("Application navigation UI change - Privacy Statement", async () => {
    
    render(<App/>);
    
    // Events are fired to test application's response to user input.
    const buttons = screen.getAllByText(/Privacy Statement/);
    fireEvent.click(buttons[0]);
    
    // After the event is fired page content is expected
    await waitFor(() => {
        const element = screen.getByText(/^Lorem ipsum dolor sit amet, consectetur adipiscing elit[.]+/);   
        expect(element).toBeInTheDocument();
    });
}); 


// Integration test - navigation UI Change
test("Application navigation UI change - Terms & Conditions", async () => {
    
    render(<App/>);
    
    // Events are fired to test application's response to user input.
    const buttons = screen.getAllByText(/Terms & Conditions/);
    fireEvent.click(buttons[0]);
    
    // After the event is fired page content is expected
    await waitFor(() => {
        const element = screen.getByText(/^Lorem ipsum dolor sit amet, consectetur adipiscing elit[.]+/);
        expect(element).toBeInTheDocument();
    });
}); 


// Integration test - navigation UI Change
test("Application navigation UI change - More Dropdown", async () => {
    
    render(<App/>);
    
    // Events are fired to test application's response to user input.
    const button = screen.getByText(/More/);
    fireEvent.mouseOver(button);
    
    // After the event is fired page content is expected
    await waitFor(() => {
        const element = screen.getByTestId("dropdown");
        expect(element).toHaveStyle({"display" : "flex"});
    });
}); 