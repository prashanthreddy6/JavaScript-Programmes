class Student{
    private String name="prashanth";
    private int age=30;

    public String getName(){
        return this.name;
    }

    public int getAge(){
        return this.age;
    }

    public void setName(String name){
        this.name=name;
    }

    public void setAge(int age){
        this.age=age;
    }
}




public class Encapsulation{
    public static void main(String[] args) {
        Student obj =new Student();
        // System.out.println(obj.name);
        // System.out.println(obj.age);

        System.out.println(obj.getAge());
        System.out.println(obj.getName());

        obj.setName("john");
        obj.setAge(40);
        System.out.println(obj.getAge());
        System.out.println(obj.getName());
        
    }
}