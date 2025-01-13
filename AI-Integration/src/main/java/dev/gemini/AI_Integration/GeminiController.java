package dev.gemini.AI_Integration;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/gemini")
public class GeminiController {

    @Autowired
    private GeminiApiService geminiApiService;

    @CrossOrigin(origins = "http://localhost:5500")
    @PostMapping("/generate-content")
    public ResponseEntity<String> generateContent(@RequestBody Map<String, String> request) {
        String prompt = request.get("prompt");
        try {
            //String response = geminiApiService.generateContent(prompt);
            //return ResponseEntity.ok(response);
            String response = geminiApiService.generateContent(prompt);

            // Assuming the response is a JSON string that contains the "text" field
            // You can use a JSON parsing library like Jackson or Gson to extract it
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode responseJson = objectMapper.readTree(response);

            // Extract the "text" field from the response
            String text = responseJson
                    .path("candidates")
                    .path(0)
                    .path("content")
                    .path("parts")
                    .path(0)
                    .path("text")
                    .asText("Text not found");
            return ResponseEntity.ok(text);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
