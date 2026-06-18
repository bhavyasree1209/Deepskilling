// Product Interface
interface Vehicle {
    void drive();
}

// Concrete Product 1
class Car implements Vehicle {
    public void drive() {
        System.out.println("Driving a Car");
    }
}

// Concrete Product 2
class Bike implements Vehicle {
    public void drive() {
        System.out.println("Riding a Bike");
    }
}

// Factory Class
class VehicleFactory {
    public Vehicle getVehicle(String type) {
        if (type == null) {
            return null;
        }

        if (type.equalsIgnoreCase("Car")) {
            return new Car();
        } else if (type.equalsIgnoreCase("Bike")) {
            return new Bike();
        }

        return null;
    }
}

// Main Class
public class FactoryMethodDemo {
    public static void main(String[] args) {
        VehicleFactory factory = new VehicleFactory();

        Vehicle v1 = factory.getVehicle("Car");
        v1.drive();

        Vehicle v2 = factory.getVehicle("Bike");
        v2.drive();
    }
}