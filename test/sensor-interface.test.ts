import { TemperatureSensor, HumiditySensor } from '../src/sensor-interface';

describe('Testing sensors with Sensor interface', () => {

    test('TemperatureSensor generates correct readings and updates lastReading', () => {
        const tempSensor = new TemperatureSensor(0, 100);

        let reading = tempSensor.readData();
        expect(reading).toBeGreaterThanOrEqual(0);
        expect(reading).toBeLessThanOrEqual(100);
        expect(tempSensor.lastReading).toBe(reading);
        tempSensor.min = 50;
        tempSensor.max = 60;

        reading = tempSensor.readData();
        expect(reading).toBeGreaterThanOrEqual(50);
        expect(reading).toBeLessThanOrEqual(60);
        expect(tempSensor.lastReading).toBe(reading);
    });

    test('HumiditySensor generates correct levels and updates history', () => {
        const humiditySensor = new HumiditySensor(20);

        let level = humiditySensor.readData();
        expect(level).toBe('Low');
        expect(humiditySensor.history).toEqual(['Low']);

        humiditySensor.currentLevel = 50;
        level = humiditySensor.readData();
        expect(level).toBe('Moderate');

        humiditySensor.currentLevel = 90;
        level = humiditySensor.readData();
        expect(level).toBe('High');
        
        expect(humiditySensor.history).toEqual(['Low', 'Moderate', 'High']);
    });
});
