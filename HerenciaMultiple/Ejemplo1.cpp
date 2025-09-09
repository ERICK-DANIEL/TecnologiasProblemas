#include <iostream>

class Animal {
public:
    virtual ~Animal() = default;

    void respirar() const {
        std::cout << "Respirando" << std::endl;
    }
};

struct Perro : public Animal {
    void ladrar() const {
        std::cout << "Woof" << std::endl;
    }
};

struct Gato : public Animal {
    void maullar() const {
        std::cout << "Miauuu" << std::endl;
    }
};

int main() {
    Perro p;
    Gato g;
    
    p.respirar();
    p.ladrar();
    
    g.respirar();
    g.maullar();
}
