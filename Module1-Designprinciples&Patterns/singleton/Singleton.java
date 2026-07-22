class Singleton {
    // Create a private static instance
    private static Singleton instance;

    // Private constructor prevents object creation from outside
    private Singleton() {
    }

    // Public method to provide access to the instance
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    public void display() {
        System.out.println("Singleton Object Created");
    }
}

public class Main {
    public static void main(String[] args) {
        Singleton obj1 = Singleton.getInstance();
        Singleton obj2 = Singleton.getInstance();

        obj1.display();

        if (obj1 == obj2) {
            System.out.println("Both references point to the same object");
        }
    }
}