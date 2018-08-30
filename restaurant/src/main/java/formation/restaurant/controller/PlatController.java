package formation.restaurant.controller;

import formation.restaurant.model.Plat;
import formation.restaurant.repositories.PlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"}, maxAge = 3600)
@RestController

public class PlatController {

    /*
  List<Plat> plats = new ArrayList<>();
    {
        plats.add(new Plat(1,"Boeuf","Boeuf à la sauce champi",20));
        plats.add(new Plat(2,"Ravioli","Ravioli à la sauce champi",10));
        plats.add(new Plat(3,"Brocoli","Brocoli à la sauce champi",24));
    }*/

    @Autowired
    private PlatRepository platRepository;


    @RequestMapping(value="/Plats", method=RequestMethod.GET)
    public List<Plat> listePlats() {
        return platRepository.findAll();
    }

    @GetMapping(value = "/Plats/{id}")
    public Plat getPlat(@PathVariable long id) {
        return platRepository.findById(id).get();
    }

    @PutMapping(value = "/Plats")
    public Plat updatePlat(@RequestBody Plat plat){
        return  platRepository.save(plat);

    }
    @PostMapping(value = "/Plats")
    public void addPlat(@RequestBody Plat plat) {
        platRepository.save(plat);
    }
}
