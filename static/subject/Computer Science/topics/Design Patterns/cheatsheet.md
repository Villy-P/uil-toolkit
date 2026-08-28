# Design Patterns

- [Design Patterns](#design-patterns)
  - [Singleton](#singleton)
    - [Core Components](#core-components)
    - [Example Implementation](#example-implementation)
  - [Object Pools](#object-pools)
    - [Core Components](#core-components-1)
    - [Implementation](#implementation)

## Singleton

Singleton is a design pattern where the programmer will restrict the instantiation of a class to a single object throughout the entire application lifecycle while providing a global access point to that instance.

### Core Components

* A `private static` variable that is of the same class.
* A `private` constructor that prevents other classes from instatiating it.
* A `public static` getter that manages the logic

### Example Implementation

``` java
class Something {
    private static Something something; // private static variable

    private Something() {} // private constructor

    public static Something getInstance() { // public static getter
        if (something == null)
            something = new Something();
        return something;
    }
}
```

## Object Pools

Objects Pools is a design pattern where the programmer creates a ready-made cache of reusable objects, instead of needing to create and destory a new object every time.

### Core Components

* A list of objects being pooled.
* A manager class that tracks which objects are being used and which ones are free.
* A way for the client to request an object then check it back out.

### Implementation

``` java

// The Reusable Object
class Connection {
    public void executeQuery(String sql) {
        System.out.println("Executing: " + sql);
    }
}

// Object Pool
class ConnectionPool {
    private List<Connection> available = new ArrayList<>();
    private List<Connection> inUse = new ArrayList<>();
    private final int MAX_POOL_SIZE = 5;

    public synchronized Connection checkOut() {
        if (available.isEmpty()) {
            if (inUse.size() < MAX_POOL_SIZE) // Make a new conncetion up to the limit
                available.add(new Connection());
            else
                throw new RuntimeException("Pool limit reached!");
        }
        Connection instance = available.remove(0);
        inUse.add(instance);
        return instance;
    }

    public synchronized void checkIn(Connection instance) {
        if (instance != null && inUse.remove(instance))
            available.add(instance);
    }
}

// Client Usage
public class Main {
    public static void main(String[] args) {
        ConnectionPool pool = new ConnectionPool();
        
        Connection conn = pool.checkOut(); // Borrow an object
        conn.executeQuery("SELECT * FROM users");
        
        pool.checkIn(conn); // Then return it to the pool when finished
    }
}
```
