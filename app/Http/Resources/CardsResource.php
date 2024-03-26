<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CardsResource extends JsonResource
{
    public static $order = 1;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        return [
            'content' => $this->content,
            'content_example' => $this->content_example,
            'definition' => $this->definition,
            'definition_example' => $this->definition_example,
            'additional_content' => $this->additional_content,
            'order' => static::$order++,
        ];
    }
}
