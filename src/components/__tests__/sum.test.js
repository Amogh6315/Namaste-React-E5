import { sum } from "../sum"

test("Sum func will add two number",()=>{
    const result = sum(3,4);

    expect(result).toBe(7);

})