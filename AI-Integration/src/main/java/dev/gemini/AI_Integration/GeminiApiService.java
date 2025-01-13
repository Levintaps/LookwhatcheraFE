package dev.gemini.AI_Integration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;



@Service
public class GeminiApiService {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${gemini.api.url}")
    private String geminiApiUrl;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    public String generateContent(String prompt) {
        // Build the request body
        String requestBody = """
            {
                "contents": [{
                    "parts": [{"text": "%s"}]
                }]
            }
            """.formatted(prompt);

        // Set headers
        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");

        // Build the HttpEntity with body and headers
        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);

        // Send POST request
        ResponseEntity<String> response = restTemplate.exchange(
                geminiApiUrl + "?key=" + geminiApiKey,
                HttpMethod.POST,
                entity,
                String.class);

        if (response.getStatusCode() == HttpStatus.OK) {
            return response.getBody();
        } else {
            throw new RuntimeException("Error calling Gemini API: " + response.getStatusCode());
        }
    }
}
