class A{

    public int add(int a,int b){
        return a+b;
    }

    public int add(int a,int b,int c){
        return a+b+c;
    }

    public float  add(float a,float b){
        return a+b;
    }
}

public class MethodOverLoading{

    public static void main(String args[]){
        A obj=new A();

        System.out.println(obj.add(10,20));
        System.out.println(obj.add(10,20,30));
        System.out.println(obj.add(10,20));
        System.out.println(obj.add(10,20));
        System.out.println(obj.add(10,20));
        System.out.println(obj.add(10,20));
        

    }
}
