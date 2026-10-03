class A{
    public int add(int a, int b) {
        System.out.println("This is a parent class add");
        return a+b;
    }

    public void show() {
        System.out.println("This is a parent class show");
    }


}

class B extends A{
    @Override
    public int add(int a, int b) {
        System.out.println("This is a child class add");
        return a+b;
    }
    public int sub(int a, int b) {
        System.out.println("This is a child class sub");
        return a-b;
    }
}

public class MethodOverRiding{

    public static void main(String[] args) {
        // A obj=new A();
        // System.out.println(obj.add(10, 20));

        // B obj1=new B();
        // System.out.println(obj1.add(10, 20));
        // System.out.println(obj1.sub(20, 10));
        // obj1.show();

        A obj2=new B();
        System.out.println(obj2.add(10, 20));
        obj2.show();



    }
}