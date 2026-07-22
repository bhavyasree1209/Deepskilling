package com.cognizant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.service.CountryService;

@SpringBootApplication
public class HqlDemoApplication implements CommandLineRunner {

    @Autowired
    private CountryService service;

    public static void main(String[] args) {
        SpringApplication.run(HqlDemoApplication.class, args);
    }

    @Override
    public void run(String... args) {

        System.out.println("----- HQL Query -----");
        service.getCountries().forEach(System.out::println);

        System.out.println("----- HQL Condition -----");
        System.out.println(service.getCountryByName("India"));

        System.out.println("----- Aggregate Function -----");
        System.out.println(service.getCount());

        System.out.println("----- Native Query -----");
        service.getNativeCountries().forEach(System.out::println);
    }
}