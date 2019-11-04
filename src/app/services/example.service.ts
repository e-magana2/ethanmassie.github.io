import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService{ 
    
    private message = 'Hello, World';

    constructor() {}

    public getMessage(): string {
        return this.message;
    }
}