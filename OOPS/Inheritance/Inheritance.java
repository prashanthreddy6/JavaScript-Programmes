

class A{
    public int add(int a, int b) {
        System.out.println("This is a parent class add");
        return a+b;
    }

    public int sub(int a, int b) {
        System.out.println("This is a parent class sub");
        return a-b;
    }

    public void show() {
        System.out.println("This is a parent class show");
    }


}

class B extends A{
    public int mul(int a, int b) {
        System.out.println("This is a child class mul");
        return a*b;
    }
    public int div(int a, int b) {
        System.out.println("This is a child class div");
        return a/b;
    }
}
// hierchial
// class c extends A{
//     public int mul(int a, int b) {
//         System.out.println("This is a child class mul");
//         return a*b;
//     }
//     public int div(int a, int b) {
//         System.out.println("This is a child class div");
//         return a/b;
//     }
// }

class C extends B{
    public int mod(int a, int b) {
        System.out.println("This is a child class mod");
        return a%b;
    }
    public double  pow(int a, int b) {
        System.out.println("This is a child class pow");
        return Math.pow(a, b);
    }
}


public class Inheritance{
    public static void main(String[] args) {

        // B obj=new B();
        // System.out.println(obj.mul(10, 20));
        // System.out.println(obj.div(10, 20));
        // System.out.println(obj.add(10, 20));
        // System.out.println(obj.sub(10, 20));

        C obj=new C();
        System.out.println(obj.pow(10, 20));
        System.out.println(obj.mod(10, 20));
        System.out.println(obj.mul(10, 20));
        System.out.println(obj.div(10, 20));
        System.out.println(obj.add(10, 20));
        System.out.println(obj.sub(10, 20));
        
    }
}