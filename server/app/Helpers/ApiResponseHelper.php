<?php

namespace App\Helpers;

class ApiResponseHelper
{
    public static function success($data = [], $code = 200, $message = 'success')
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data
        ], $code);
    }

    public static function fail($code = 500, $message = 'fail')
    {
        return response()->json([
            'success' => false,
            'message' => $message,
            'status_code' => $code
        ], $code);
    }
}
