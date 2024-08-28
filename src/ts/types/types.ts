export type State =  {
    GameID: string;
    Width: number;
    Height: number; 
    Score: number;
    Fruit: Fruit; 
    Snake: Snake; 
};

export type Fruit =  {
    x: number;
    y: number; 
};

export type Snake =  {
    x: number;
    y: number;
    velX: number; 
    velY: number;
};

export type Ticks = {
    velX: number;
    velY: number;
}