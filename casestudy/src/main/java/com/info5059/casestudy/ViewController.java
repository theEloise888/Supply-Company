package com.info5059.casestudy;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.Duration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping

@Controller
public class ViewController {
    @RequestMapping({"/home", "/vendors", "/products", "/POPDF?po=", "/viewer"})
    public String index() {
        return "forward:/index.html";
    }

    // fix SameSite attribute of Cookie error
    @GetMapping("/test")
    public Object test(HttpServletRequest request,
                       HttpServletResponse response) throws Exception {

        ResponseCookie cookie = ResponseCookie.from("myCookie", "myCookieValue") // key & value
                .httpOnly(true)        // prohibit js reading
                .secure(false)        // also transmit under http
                .domain("localhost")// domain name
                .path("/")            // path
                .maxAge(Duration.ofHours(1))    // Expires in 1 hour
                .sameSite("Lax")    // In most cases, third-party cookies are not sent, except for Get requests that navigate to the target URL
                .build();

        // Set Cookie Header
        response.setHeader(HttpHeaders.SET_COOKIE, cookie.toString());

        return "ok";
    }
}
