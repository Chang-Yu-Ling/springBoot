package com.example.hello.swagger;

import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/*  < swagger reference > 
reference_swagger_404: 
   - spring 3: https://medium.com/@openthedidi2004/spring-boot-%E5%B0%88%E6%A1%88%E4%BD%BF%E7%94%A8swagger-%E6%A8%99%E7%A4%BAapi-36ae720e8905
   - spring 2: https://ithelp.ithome.com.tw/m/articles/10247180
reference_PASS: 
   - spring 3: https://blog.csdn.net/weixin_43529394/article/details/131067281
   - spring 3: https://stackoverflow.com/questions/74776863/404-error-on-swagger-ui-with-spring-springdoc-openapi-configuration

doc url:
   - http://localhost:8080/swagger-ui.html
   - http://localhost:8000/swagger-ui/index.html
*/
@Configuration
public class OpenApiConfig {

    @Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
                .group("Public API")
                .packagesToScan("com.example.hello.controller")
                .build();
    }
}