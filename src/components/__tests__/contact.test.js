import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"
test("Should load Contact us Component", () => {
    render(<Contact/>)
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    
});
test("Should load Button inside contact us Component", () => {
    render(<Contact/>)
    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument();
    
});
// for multiple we use getAllByRole
test("Should load textbox inside contact us Component", () => {
    render(<Contact/>)
    const inputBoxes=screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
    
}); 
// instead of name "test" we can also write "it"

// can also nest or put it inside describe like loops
// like
// describe("",()=>{
// test("",()=>{

// })
// })

// and also put describe inside descirbe just to differnetiate and organise