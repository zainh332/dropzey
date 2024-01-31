<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;

class NewsController extends Controller
{
    public function getMediumPost()
    {
        // $url = 'https://medium.com/@dropzeyofficial/introducing-dropzey-transforming-airdrops-on-the-stellar-blockchain-dfbef19c6791';

        // $client = new Client();
        // $response = $client->request('GET', $url);

        // $html = $response->getBody()->getContents();

        // $crawler = new Crawler($html);

        // // Extract title, description, and image
        // $title = $crawler->filter('h1')->text(); // Update the selector according to your Medium post structure
        // $description = $crawler->filter('p')->text(); // Update the selector according to your Medium post structure
        // $image = $crawler->filter('img')->attr('src'); // Update the selector according to your Medium post structure

        // return response()->json([
        //     'title' => $title,
        //     'description' => $description,
        //     'image' => $image,
        // ]);

        $url = 'https://medium.com/@dropzeyofficial'; // Update with desired Medium profile URL
        $client = new Client();
        $response = $client->request('GET', $url);
        $html = $response->getBody()->getContents();
        $crawler = new Crawler($html);

        $articles = [];
        $articleCount = 0;
        $crawler->filter('article')->each(function (Crawler $node) use (&$articles, &$articleCount) {
            if ($articleCount >= 3) {
                return; // Skip if count reaches 3
            }
            $title = $node->filter('h2')->text(); // Updated selector
            $description = $node->filter('.h')->text(); // Updated selector for description
            $limitedDescription = strlen($description) > 150 ? substr($description, 0, 150) . '...' : $description;
            $link = $node->filter('a')->attr('href');
            // $image = $node->filter('.h k ks da de')->attr('src'); // Updated selector for description

            // For image, it seems you don't have a direct selector in the provided HTML snippet

            $articles[] = [
                'title' => $title,
                'description' => $limitedDescription,
                'link' => 'https://medium.com'.$link,
                // 'image' => $image, // Placeholder for the image as there's no direct image selector provided
            ];
            $articleCount++;
        });

        return response()->json([
            'posts' => $articles,
        ]);
    }
}
