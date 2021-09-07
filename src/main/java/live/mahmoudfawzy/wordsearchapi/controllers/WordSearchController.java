package live.mahmoudfawzy.wordsearchapi.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import live.mahmoudfawzy.wordsearchapi.services.WordGridService;

@RestController
public class WordSearchController {
	
	@Autowired
	private WordGridService wordGridService;
	
	@GetMapping("/wordgrid")
// Allows the API to be publicly accessible from anywhere
	@CrossOrigin("*")
	public String createWordGrid(@RequestParam int gridSize, @RequestParam String wordList) {
		
		List<String> words = Arrays.asList(wordList.toUpperCase().split(","));
		
		char[][] grid = wordGridService.generateGrid(gridSize, words);
		
		wordGridService.displayGrid(grid);
		
		String gridToString = "";
		for (int i = 0; i < gridSize; i++) {
			for (int j = 0; j < gridSize; j++) {
				gridToString += grid[i][j] + " ";
			}
			gridToString += "\r\n ";
		}
		
		return gridToString;
	}
}
