<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Airdrop extends Model
{
    use HasFactory;

    public function eligibility()
    {
        return $this->hasOne(Eligibility::class);
    }

    public function socialLinks()
    {
        return $this->hasOne(SocialLinks::class);
    }
}
