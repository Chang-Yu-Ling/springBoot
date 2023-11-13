// package com.example.hello;

// import org.springframework.context.annotation.ComponentScan;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.EnableWebMvc;
// import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
// import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

// // @Configuration
// // public class WebConfig extends WebMvcConfigurerAdapter {

// //    @Override
// //     public void addResourceHandlers(ResourceHandlerRegistry registry) {
// //         registry.addResourceHandler("/**").addResourceLocations("classpath:/static/");
// //         }
// // }
// // @EnableWebMvc
// // @Configuration
// // public class WebConfig extends WebMvcConfigurerAdapter  {

// //     @Override
// //     public void addViewControllers(ViewControllerRegistry registry) {
// //         //registry.addViewController("/docs").setViewName("redirect:/docs/");
// //         registry.addViewController("/").setViewName("forward:/index.html");
// //     }
// // }
// @Configuration  
// @EnableWebMvc  
// public class WebConfig extends WebMvcConfigurerAdapter {  

//     @Override
//     public void addViewControllers(ViewControllerRegistry registry) {
//         registry.addRedirectViewController("/", "/static/index.html");
//     }

// }