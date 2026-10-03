
abstract class A{
    abstract void honda();
    public void maruti(){
        System.err.println("This is moderate car");
    }

}

class B extends A{
    public void honda(){
        System.err.println("This is a cheap car");
    }

}

interface C{
    abstract void royalEnfield();
    abstract void KTM();
}

interface C1{
    abstract void xpulse();
    abstract void R15();
}

class D implements C , C1{
    @Override
    public void royalEnfield(){
        System.err.println("Good bike not for racing");
    }

    @Override
    public void KTM(){
        System.err.println("Good bike KTM for racing");
    }

    @Override
    public void R15(){
        System.err.println("Good bike KTM for racing");
    }

    @Override
    public void xpulse(){
        System.err.println("Good bike KTM for racing");
    }

}



public class Abstaraction{
    public static void main(String[] args) {

        A obj=new B();
        B obj2=new B();
        D obj3=new D();

        // obj.honda();
        // obj.maruti();
        // obj2.honda();
        // obj2.maruti();

        obj3.KTM();
        obj3.royalEnfield();
        obj3.xpulse();;
        obj3.R15();

        
    }
}