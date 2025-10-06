export interface Sensor<T> {
    readData(): T;
}

export class TemperatureSensor implements Sensor<number> {
    public lastReading: number = 0;

    constructor(
        public min: number,
        public max: number
    ) {}

    readData(): number {
        this.lastReading = Math.random() * (this.max - this.min) + this.min;
        return this.lastReading;
    }
}

export class HumiditySensor implements Sensor<'Low' | 'Moderate' | 'High'> {
    public history: ('Low' | 'Moderate' | 'High')[] = [];

    constructor(
        public currentLevel: number
    ) {}

    readData(): 'Low' | 'Moderate' | 'High' {
        let level: 'Low' | 'Moderate' | 'High';
        if (this.currentLevel < 30) level = 'Low';
        else if (this.currentLevel < 70) level = 'Moderate';
        else level = 'High';
        this.history.push(level);
        return level;
    }
}
